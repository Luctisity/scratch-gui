import PropTypes from 'prop-types';

export const AccountMenuOptionsPropTypes = PropTypes.shape({
    canHaveSession: PropTypes.bool.isRequired,

    canRegister: PropTypes.bool,
    canLogin: PropTypes.bool,
    canLogout: PropTypes.bool,

    avatarUrl: PropTypes.string,
    myStuffUrl: PropTypes.string,
    profileUrl: PropTypes.string,
    myClassesUrl: PropTypes.string,
    myClassUrl: PropTypes.string,
    accountSettingsUrl: PropTypes.string
});
