import { Logout, Person } from '@mui/icons-material';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

type NavbarListProps = {
  open: boolean,
  list: { text: string, icon: React.ReactNode, link: string }[],
};

const NavbarList = ({ open, list }: NavbarListProps) => {

  const handleLogout = () => {

  }

  return (
    <>
      <List>
        {list.map((listItem, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{
              color: "primary.contrastText",
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center', px: 2.5,
              "&.Mui-selected": { backgroundColor: "primary.dark" },
            }}>
              <ListItemIcon sx={{ color: "primary.contrastText", minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                {listItem.icon}
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={listItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleLogout} sx={{
            color: "primary.contrastText",
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center', px: 2.5,
            "&.Mui-selected": { backgroundColor: "primary.dark" },
          }}>
            <ListItemIcon sx={{ color: "primary.contrastText", minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
              <Person />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }} primary="Account" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleLogout} sx={{
            color: "primary.contrastText",
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center', px: 2.5,
            "&.Mui-selected": { backgroundColor: "primary.dark" },
          }}>
            <ListItemIcon sx={{ color: "primary.contrastText", minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
              <Logout />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }} primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}

export default NavbarList;