import { DivLayout } from './styles';
import Header from '../Header';

const Layout = ({children}: {children: JSX.Element}) => {
  return (
    <DivLayout>
        <Header />
        {children}
    </DivLayout>
  );
}

export default Layout;