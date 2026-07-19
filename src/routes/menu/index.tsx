import { getMenuQuery } from '~entities/menu/model/queries';
import { MenuWidget } from '~widgets/menu/ui/MenuWidget';

const MenuPage = () => {
  return <MenuWidget />;
};

MenuPage.actions = [getMenuQuery.prefetchAction()];

export default MenuPage;
