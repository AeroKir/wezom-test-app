import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Typography,
} from 'antd';

import NATIONALITIES from '../../constants/nationalities';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import generateKey from '../../utils/generateKey';

function StatisticBlock({ contactsData }) {
  const { Text } = Typography;

  const { width } = useWindowDimensions();
  const mobileViewportBreakpoint = 620;

  return (
    <Row gutter={[16, 14]} justify="start" style={{ width: '90%' }}>
      {
        Object.keys(NATIONALITIES).map((nationality, item) => {
          const nationalityName = Object.values(NATIONALITIES)[item].name;
          const nationalityAmount = contactsData.filter((contact) => contact.nat === nationality);

          return (
            <Col
              key={generateKey()}
              className="gutter-row"
              span={width >= mobileViewportBreakpoint ? 4 : 12}
              style={{ textAlign: 'left' }}
            >
              <Text strong>
                {nationalityName}
                :
                {' '}
              </Text>
              <Text type="secondary" ellipsis>
                {nationalityAmount.length}
                {' '}
                {nationalityAmount.length === 1 ? 'contact' : 'contacts'}
              </Text>
            </Col>
          );
        })
      }
    </Row>
  );
}

StatisticBlock.propTypes = {
  contactsData: PropTypes.arrayOf(PropTypes.object),
};

StatisticBlock.defaultProps = {
  contactsData: [{}],
};

export default StatisticBlock;
