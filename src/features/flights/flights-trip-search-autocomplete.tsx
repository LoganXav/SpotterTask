import {
  SwapHoriz,
  ArrowBack,
  Add as AddIcon,
  Check as CheckIcon,
  FmdGoodOutlined as FmdGoodOutlinedIcon,
  TripOriginRounded as TripOriginRoundedIcon,
} from '@mui/icons-material';
import { cn } from '@/utils/style';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState, useRef, useEffect } from 'react';
import PortalProvider from '@/providers/portal-provider';
import {
  Box,
  Checkbox,
  Chip,
  IconButton,
  InputBase,
  Typography,
} from '@mui/material';

const locations = [
  'Lagos',
  'Abuja',
  'Ibadan',
  'Port Harcourt',
  'Kano',
  'Enugu',
  'Benin City',
  'Kaduna',
];

function FlightsTripSearchComboBox({
  items,
  selectedItems,
  setSelectedItems,
  multiSelectMode,
  toggleMultiSelectMode,
  onClose,
  isMobile,
}: {
  items: string[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  multiSelectMode: boolean;
  toggleMultiSelectMode: () => void;
  onClose: () => void;
  isMobile: boolean;
}) {
  const [searchValue, setSearchValue] = useState('');

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = (item: string) => {
    if (multiSelectMode) {
      setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    } else {
      setSelectedItems([item]);
      onClose(); // closes portal for single selection
    }
  };

  return (
    <Box
      onClick={(e) => e.stopPropagation()}
      className={cn(
        'bg-background-default shadow-[0_0px_3px_0_rgba(0,0,0,0.1),0_4px_8px_3px_rgba(0,0,0,0.15)]',
        isMobile
          ? 'fixed inset-0 w-full h-screen p-4 z-[1200]'
          : 'absolute -top-1 left-0 w-[500px] mt-1 z-50 rounded-sm max-h-80 overflow-auto'
      )}
    >
      <Box className="relative flex items-center gap-2 px-2 py-2 border-b border-muted-main">
        <IconButton size="small" onClick={isMobile ? onClose : undefined}>
          {isMobile ? (
            <ArrowBack />
          ) : (
            <TripOriginRoundedIcon className="w-4 h-4" />
          )}
        </IconButton>

        {multiSelectMode &&
          selectedItems.map((item) => (
            <Chip
              key={item}
              label={item}
              size="small"
              onDelete={() =>
                setSelectedItems(selectedItems.filter((i) => i !== item))
              }
            />
          ))}

        <InputBase
          autoFocus
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className="flex-1 min-w-[100px] h-12 px-2 bg-transparent font-roboto focus:outline-none"
        />

        <IconButton
          size="small"
          onClick={() => {
            setSearchValue('');
            toggleMultiSelectMode();
            if (multiSelectMode) onClose();
          }}
        >
          {multiSelectMode ? <CheckIcon /> : <AddIcon />}
        </IconButton>
      </Box>

      {/* Search Options */}
      <Box
        className={cn(
          'font-roboto',
          isMobile ? 'max-h-[70vh]' : 'h-60 overflow-auto'
        )}
      >
        {filtered.map((item) => (
          <Box
            key={item}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(item);
            }}
            className={cn(
              'h-12 md:h-16 px-4 py-2 flex items-center cursor-pointer hover:bg-primary-contrastText/20',
              selectedItems.includes(item) && 'bg-primary-contrastText/20'
            )}
          >
            {multiSelectMode && (
              <Checkbox
                checked={selectedItems.includes(item)}
                onChange={(e) => {
                  e.stopPropagation();
                  handleSelect(item);
                }}
                size="small"
                color="info"
                className="mr-2"
              />
            )}
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function FlightsTripSearchAutocompleteTrigger({
  placeholder,
  value,
  setValue,
}: {
  placeholder: string;
  value: string[];
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [multiSelectMode, setMultiSelectMode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        if (value.length === 0) setMultiSelectMode(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [value, isMobile]);

  const toggleMultiSelectMode = () => setMultiSelectMode((prev) => !prev);

  return (
    <Box ref={containerRef} className="relative w-full">
      {/* Trigger Input */}
      <Box
        onClick={() => setIsOpen(true)}
        className="relative w-full flex flex-wrap items-center gap-1 h-12 md:h-16 px-4 md:px-24 border rounded-sm border-muted-main hover:border-text-primary cursor-text overflow-x-hidden"
      >
        <Box className="absolute left-6 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
          <FmdGoodOutlinedIcon />
        </Box>
        <div className="absolute flex space-x-2 left-14 w-full">
          {value.length === 0 ? (
            <span className="text-text-secondary font-roboto">
              {placeholder}
            </span>
          ) : (
            value.map((item, idx) => (
              <Box key={idx} className="flex items-center space-x-2">
                <Typography className="font-roboto">{item}</Typography>
                {idx < value.length - 1 && <span>•</span>}
              </Box>
            ))
          )}
        </div>
      </Box>

      {/* FlightsTripSearchComboBox */}
      {isOpen &&
        (isMobile ? (
          <PortalProvider>
            <FlightsTripSearchComboBox
              items={locations}
              selectedItems={value}
              setSelectedItems={setValue}
              multiSelectMode={multiSelectMode || value.length > 1}
              toggleMultiSelectMode={toggleMultiSelectMode}
              onClose={() => setIsOpen(false)}
              isMobile
            />
          </PortalProvider>
        ) : (
          <FlightsTripSearchComboBox
            items={locations}
            selectedItems={value}
            setSelectedItems={setValue}
            multiSelectMode={multiSelectMode || value.length > 1}
            toggleMultiSelectMode={toggleMultiSelectMode}
            onClose={() => setIsOpen(false)}
            isMobile={false}
          />
        ))}
    </Box>
  );
}

function FlightsTripSearchAutocomplete() {
  const [from, setFrom] = useState<string[]>([]);
  const [to, setTo] = useState<string[]>([]);

  return (
    <Box className="relative flex items-center gap-2 w-full bg-inherit">
      <FlightsTripSearchAutocompleteTrigger
        placeholder="Lagos"
        value={from}
        setValue={setFrom}
      />
      <FlightsTripSearchAutocompleteTrigger
        placeholder="Where to?"
        value={to}
        setValue={setTo}
      />

      {/* Swap Icon */}
      <Box className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-11 md:h-11 rounded-full bg-inherit border border-muted-main z-10" />
      <Box className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 bg-inherit z-20" />
      <IconButton
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 p-2 text-text-secondary"
        onClick={() => {
          const tmp = from;
          setFrom(to);
          setTo(tmp);
        }}
      >
        <SwapHoriz />
      </IconButton>
    </Box>
  );
}

export default FlightsTripSearchAutocomplete;
