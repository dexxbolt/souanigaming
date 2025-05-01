
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortSelectorProps {
  sortOption: string;
  onSortChange: (value: string) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({ sortOption, onSortChange }) => {
  return (
    <Select
      value={sortOption}
      onValueChange={onSortChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="featured">Featured</SelectItem>
        <SelectItem value="price-asc">Price: Low to High</SelectItem>
        <SelectItem value="price-desc">Price: High to Low</SelectItem>
        <SelectItem value="name-asc">Name: A to Z</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
