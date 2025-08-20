interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'BOb Running Page',
  siteUrl: 'https://bobrun.vercel.app/',
  logo: 'https://tbgnu8og-1300158435.cos.ap-shanghai.myqcloud.com/running_page/logo.jpg',
  description: 'Personal site and blog',
  navLinks: [],
};

export default data;
