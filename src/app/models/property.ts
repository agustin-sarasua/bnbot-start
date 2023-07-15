export interface Property {
    property_id?: string;
    name?: string;
    // calendar_config?: CalendarConfig;
    other_calendar_links?: string[];
    description?: string;
    amenities?: string[];
    max_guests?: number;
    pick_up_keys_instructions?: string;
  }