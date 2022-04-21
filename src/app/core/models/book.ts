export interface Link {
  self: string; // URL of the element
  related?: string; // Optional property
}

export interface DisplayProperties {
  type: string;
  image: string;
}

export interface Attributes {
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  properties: string; // Current value is null
  display_properties: DisplayProperties;
}

export interface Member {
  links: Link;
}

export interface Relationships {
  authors: Member;
  publishers: Member;
}

export interface Book {
  id: number;
  type: string; // it has only "books" at the moment, that's why interface name is Book
  links: Link;
  attributes: Attributes;
  relationships: Relationships;
}
