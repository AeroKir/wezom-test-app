import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import NATIONALITIES from '../../constants/nationalities';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function ContactsSearchFilterForm({
  nameFilter, genderFilter, nationalityFilter, isContactFilterClearDisabled, handleClearForm,
}) {
  const { Option } = Select;

  const [queryValue, setQueryValue] = useState('');
  const nameQuery = queryValue;

  useEffect(() => {
    const timer = setTimeout(() => nameFilter(nameQuery), 500);
    return () => clearTimeout(timer);
  }, [nameFilter, nameQuery]);

  const handleGenderFilter = (genderValue) => {
    genderFilter(genderValue);
  };

  const handleNationalityFilter = (nationalityValue) => {
    nationalityFilter(nationalityValue);
  };

  const { width } = useWindowDimensions();
  const mobileViewportBreakpoint = 620;

  return (
    <Form layout={width >= mobileViewportBreakpoint ? 'inline' : 'vertical'} style={{ width: '100%' }}>

      <Form.Item>
        <Input.Search
          placeholder="Search by full name"
          size="large"
          allowClear
          style={{ width: width >= mobileViewportBreakpoint ? 530 : '100%' }}
          value={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Select
          placeholder="Gender"
          size="large"
          allowClear
          style={{ width: width >= mobileViewportBreakpoint ? 195 : '100%' }}
          onChange={handleGenderFilter}
        >
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="indeterminate">Indeterminate</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Select
          placeholder="Nationality"
          mode="tags"
          size="large"
          style={{ width: width >= mobileViewportBreakpoint ? 245 : '100%' }}
          onChange={handleNationalityFilter}
        >
          {Object.keys(NATIONALITIES).map((nat, item) => {
            const nationalityName = Object.values(NATIONALITIES)[item].name;
            return <Option key={nationalityName} value={nationalityName}>{nationalityName}</Option>;
          })}
        </Select>
      </Form.Item>

      <Form.Item>
        <Checkbox>I am creator</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          key="cancel"
          type="link"
          icon={<CloseOutlined />}
          style={{ marginLeft: '10px' }}
          disabled={isContactFilterClearDisabled}
          onClick={handleClearForm}
        >
          Clear
        </Button>
      </Form.Item>

    </Form>
  );
}

ContactsSearchFilterForm.propTypes = {
  nameFilter: PropTypes.func.isRequired,
  genderFilter: PropTypes.func.isRequired,
  nationalityFilter: PropTypes.func.isRequired,
  handleClearForm: PropTypes.func.isRequired,
  isContactFilterClearDisabled: PropTypes.bool,
};

ContactsSearchFilterForm.defaultProps = {
  isContactFilterClearDisabled: true,
};

export default ContactsSearchFilterForm;
