export interface Location {
    latitude?: number;
    longitude?: number;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postal_code?: string;
}
  
export interface BusinessOwner {
    name?: string;
    phone_number?: string;
    email?: string;
}

export interface PaymentOption {
    payment_method?: string;
    instructions?: string;
}

export interface CalendarConfig {
    currency?: string;
    base_price?: number;
    weekend_price?: number;
    special_day_prices?: { [key: string]: number };
    extra_per_person?: number;
    open_days?: Date[];
}

export interface DayConfig {
    date: Date;
    price: number;
    is_open: boolean;
}

export interface CalendarLink {
    source: string;
    link: string;
}

export interface Property {
    property_id?: string;
    name?: string;
    calendar_config?: CalendarConfig;
    calendar_links?: CalendarLink[];
    description?: string;
    amenities?: string[];
    max_guests?: number;
    pick_up_keys_instructions?: string;
}

export interface Business {
    id?: string;
    user_id: string;
    bnbot_id?: string;
    business_name?: string;
    description?: string;
    bnbot_configuration?: { [key: string]: number };
    location?: Location;
    business_owners?: BusinessOwner[];
    payment_options?: PaymentOption[];
    how_to_arrive_instructions?: string;
    properties?: Property[];
}

export interface LoadBusinesses {
    bnbot_id?: string;
    location?: string;
    business_name?: string;
    business_owner?: string;
}
  