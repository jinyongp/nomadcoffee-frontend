import { Helmet } from 'react-helmet-async';

type PageTitleProps = {
  page: string;
};

export default function PageTitle({ page }: PageTitleProps) {
  return (
    <Helmet>
      <title>{page} | Nomad Coffee</title>
    </Helmet>
  );
}
