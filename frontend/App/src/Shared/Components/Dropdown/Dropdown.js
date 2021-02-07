import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useStyles } from "./styles";

class _Dropdown extends React.PureComponent {
  componentDidMount() {
    const { onChange, filterKey, defaultValue } = this.props;
    if (defaultValue) {
      onChange(filterKey, defaultValue, false);
    }
  }
  render() {
    const {
      classes,
      onChange,
      options,
      title,
      filterKey,
      filters,
      defaultValue,
    } = this.props;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel>{title}</InputLabel>
        <Select
          value={filters[filterKey] || defaultValue || ""}
          onChange={(event) => onChange(filterKey, event.target.value)}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}
export default function Dropdown(props) {
  const classes = useStyles();
  return <_Dropdown classes={classes} {...props} />;
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  filterKey: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
};
