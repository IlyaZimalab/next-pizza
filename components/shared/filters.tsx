import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { FilterCheckbox } from './filter-checkbox';
import { RangeSlider } from './range-slider';
import { Title } from './title';

interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {
  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold"></Title>
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can be assemble" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
            {
                text: 'Cheese sauce',
                value: '1',
            },
            {
                text: 'Mozzarella',
                value: '2',
            },
            {
                text: 'Garlic',
                value: '3',
            },
            {
                text: 'Pickled cucumbers',
                value: '4',
            },
            {
                text: 'Pickled cucumbers',
                value: '5',
            },
            {
                text: 'Red onion ',
                value: '6',
            },
            {
                text: 'Tomatoes',
                value: '7',
            }
        ]}
        items={[
            {
                text: 'Cheese sauce',
                value: '1',
            },
            {
                text: 'Mozzarella',
                value: '2',
            },
            {
                text: 'Garlic',
                value: '3',
            },
            {
                text: 'Pickled cucumbers',
                value: '4',
            },
            {
                text: 'Pickled cucumbers',
                value: '5',
            },
            {
                text: 'Red onion ',
                value: '6',
            },
            {
                text: 'Tomatoes',
                value: '7',
            },
            {
                text: 'Cheese sauce',
                value: '1',
            },
            {
                text: 'Mozzarella',
                value: '2',
            },
            {
                text: 'Garlic',
                value: '3',
            },
            {
                text: 'Pickled cucumbers',
                value: '4',
            },
            {
                text: 'Pickled cucumbers',
                value: '5',
            },
            {
                text: 'Red onion ',
                value: '6',
            },
            {
                text: 'Tomatoes',
                value: '7',
            },
            {
                text: 'Cheese sauce',
                value: '1',
            },
            {
                text: 'Mozzarella',
                value: '2',
            },
            {
                text: 'Garlic',
                value: '3',
            },
            {
                text: 'Pickled cucumbers',
                value: '4',
            },
            {
                text: 'Pickled cucumbers',
                value: '5',
            },
            {
                text: 'Red onion ',
                value: '6',
            },
            {
                text: 'Tomatoes',
                value: '7',
            },
            {
                text: 'Cheese sauce',
                value: '1',
            },
            {
                text: 'Mozzarella',
                value: '2',
            },
            {
                text: 'Garlic',
                value: '3',
            },
            {
                text: 'Pickled cucumbers',
                value: '4',
            },
            {
                text: 'Pickled cucumbers',
                value: '5',
            },
            {
                text: 'Red onion ',
                value: '6',
            },
            {
                text: 'Tomatoes',
                value: '7',
            }
        ]}
      />
    </div>
  );
};
