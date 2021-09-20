import React from "react"
import "../styles/layout.css"
import Header from "./header"
import Footer from "./footer"
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// ローディング画面のスタイル定義
const useStyle = makeStyles((theme) => ({
    loading: {
        width: '100%',
        position: 'absolute',
        margin: 'auto',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Layout = ({ children }) => {

    const classes = useStyle();

    //ローディング表示を管理するステート
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(false);
    },[])

    const Contents = () => {
        return(
            <React.Fragment>
                <Header />
                <div className="layout">
                    <main>{children}</main>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            {isLoading ? (<LinearProgress />) : (<Contents />)}
        </React.Fragment>
    )
}

export default Layout