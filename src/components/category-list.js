import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CategoryIcon from '@material-ui/icons/Category';
import ArrowRight from '@material-ui/icons/ArrowRight'

const useStyles = makeStyles((theme) => ({
    nav_link: {
        color: 'inherit',
        textDecoration: 'none',
        alignItems: 'center',
        display: 'flex',
    },
    nav_icon: {
        marginTop: '3px',
        marginBbottom: '3px',
    },
}));

export default function CategoryList() {
    const classes = useStyles();

    const category = useStaticQuery(
        graphql`
        query CategoryQuery {
            allContentfulCategory(sort: {fields: name, order: ASC}) {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
          
        `
    );

    return (
        <React.Fragment>
            <ListItem>
                <ListItemIcon>
                    <CategoryIcon className={classes.nav_icon} />
                </ListItemIcon>
                <ListItemText primary="Categories"/>
            </ListItem>
            {category.allContentfulCategory.edges.map(edge => (
                <ListItem key={edge.node.slug}>
                    <Link to={`/categories/${edge.node.slug}`} className={classes.nav_link}>
                        <ListItemIcon>
                            <ArrowRight className={classes.nav_icon} />
                        </ListItemIcon>
                        <ListItemText primary={edge.node.name}/>
                    </Link>
                </ListItem>
            ))}
        </React.Fragment>
    );
}