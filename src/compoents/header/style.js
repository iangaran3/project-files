import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color:"yellow",
      paddingLeft:20,
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 1.5) },
    marginRight: theme.spacing(5),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 1), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex',color:'green', alignItems: 'center', justifyContent: 'center',
  },
  inputRoot: {
color:'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),color:'black', paddingLeft: `calc(1em + ${theme.spacing(3)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
}));

