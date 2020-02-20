import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { useTranslation } from 'react-i18next';

const SelectCategory = ({
  handleSelect,
  defaultValue = '',
  ...props
}) => {
  const [category, setCategory] = React.useState(defaultValue);
  const { t } = useTranslation();
  const handleChange = event => {
    setCategory(event.target.value);
    if (handleSelect) handleSelect(event);
  };
  const { categories } = props;
  const renderCategories = categories => {
    return categories.edges.map(({ node }) => {
      const { id, name } = node;

      return (
        <MenuItem value={id} key={id}>
          {name}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl variant="outlined" size="small" {...props}>
      <Select value={category} onChange={handleChange} displayEmpty>
        <MenuItem value="" disabled>
          {t('products.category')}
        </MenuItem>
        {renderCategories(categories)}
      </Select>
    </FormControl>
  );
};

export default SelectCategory;
