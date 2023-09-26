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

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://bobrun.vercel.app/',
  logo: 'https://tbgnu8og-1300158435.cos.ap-shanghai.myqcloud.com/running_page/logo.jpg',
  description: 'Personal site and blog',
  navLinks: [
  ],
};

export default data;
