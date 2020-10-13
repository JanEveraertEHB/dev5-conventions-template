/* eslint-disable */


export default {
  starter: {
    front: { defaultPageSize: 10 },
    hosts: {
      front: `http://${process.env.REACT_APP_DOMAIN}`,
      api: `http://api.${process.env.REACT_APP_DOMAIN}`,
      api: `http://admin.${process.env.REACT_APP_DOMAIN}`,
      socket: 'http://starter.local:3322'
    },
    title: 'starter'
  },
  anonActivities: []
};
