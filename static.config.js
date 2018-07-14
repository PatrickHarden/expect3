import axios from 'axios'



export default {
  getSiteData: async () => {
    const baseURL = 'http://www.expect3.io.php72-38.lan3-1.websitetestlink.com/'
    const { data: menus } = await axios.get(baseURL + '/index.php/wp-json/wp-api-menus/v2/menus/2')
    const { data: options } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/options/')


    return {
      title: 'Expect3 Template',
      siteRoot: 'https://expect3.com',
      siteCreator: 'Expect3',
      siteCreatorURL: 'https://expect3.com',
      menus,
      options
    }
  },
  getRoutes: async () => {
    const baseURL = 'http://www.expect3.io.php72-38.lan3-1.websitetestlink.com'
    const { data: pages } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=99')
    const { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=6')

    return [
      {
        path: '/blogs',
        component: 'src/pages/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/${post.slug}`,
          component: 'src/singles/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/contact',
        component: 'src/pages/Contact',
      },
      {
        path: '/',
        component: 'src/pages/Home',
        children: pages.map(page => ({
        path: `/${page.slug}`,
        component: 'src/pages/Page',
          getData: () => ({
            page,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  }
}