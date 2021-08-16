import Cookies from 'js-cookie'

export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    let token = Cookies.get('Authorization');
    token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6aGFuZzIwMDg0QDEyNi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTYzMDU2MTM3N30.azaztxDcYHIP-xPfjxeooYVp8cUxqj9xNsvLXFRD1S810zYqdQ42s9WiJ5UFliqPIEtwfkIjAyyVUBdZ70NCsw";
    if (token) {
      config.headers.Authorization =
        'Bearer ' + token
    }
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      if (error.response.data.code === -9) {
        window.location.href =
          'https://account.easyapi.com/login?from=https://market.easyapi.com'
      } else if (error.response.data.code === -8) {
        window.location.href =
          'https://team.easyapi.com/new?from=https://doc.easyapi.com'
      } else {
        this.$message.warning(error.response.data.message)
      }
    }
  })
}
