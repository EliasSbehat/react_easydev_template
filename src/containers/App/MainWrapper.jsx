import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppConfig } from '@/redux/actions/appConfigActions';
import Loading from '@/shared/components/Loading';

const direction = (location, rtl) => (location.pathname === '/' ? 'ltr' : rtl.direction);

const MainWrapper = ({ children, location }) => {
  const { rtl, isFetching } = useSelector(state => ({
    rtl: state.rtl,
    isFetching: state.appConfig.isFetching,
  }));

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAppConfig());
  }, [dispatch]);

  return isFetching ? (
    <Loading loading={isFetching} />
      ) : (
        <div
          className={`${direction(location, rtl)}-support`}
          dir={direction(location, rtl)}
        >
          <div className="wrapper">
            {children}
          </div>
        </div>
      );
};

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(MainWrapper);
