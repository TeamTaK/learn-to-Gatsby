import React from "react"
import "../styles/layout.css"
import Header from "./header"
import Footer from "./footer"
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import LinearProgress from '@material-ui/core/LinearProgress';
import CssBaseline from '@material-ui/core/CssBaseline';


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

    //ダークモード選択状況を保持するステート
    const [darkMode, setDarkMode] = React.useState(false);

    //ダークモードON
    const handleDarkModeOn = () => {
        localStorage.setItem("darkMode", "on")
        setDarkMode(true);
    };

    //ダークモードオフ
    const handleDarkModeOff = () => {
        localStorage.setItem("darkMode", "off");
        setDarkMode(false);
    };


    //読み込み完了時、ロード画面を非表示にする。
    React.useEffect(() => {
        setIsLoading(false);
        //useEffectでダークモードの状態を取得する。
        localStorage.getItem("darkMode") === "on" ? setDarkMode(true) : setDarkMode(false)
    },[]);

    // テーマ作成
    const theme = createTheme({
        typography: {
        fontFamily: [
            "Noto Sans JP",
            "Lato",
            "游ゴシック Medium",
            "游ゴシック体",
            "Yu Gothic Medium",
            "YuGothic",
            "ヒラギノ角ゴ ProN",
            "Hiragino Kaku Gothic ProN",
            "メイリオ",
            "Meiryo",
            "ＭＳ Ｐゴシック",
            "MS PGothic",
            "sans-serif",
        ].join(","),
        },
        palette: {
            primary: { main: colors.blue[800] }, // テーマの色
            type: darkMode ? "dark" : "light",
        },
    });

    const Contents = () => {
        return(
            <React.Fragment>
                <Header darkMode={darkMode} handleDarkModeOn={handleDarkModeOn} handleDarkModeOff={handleDarkModeOff} />
                <div className="layout">
                    <main>{children}</main>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {isLoading ? (<LinearProgress className={classes.loading}/>) : (<Contents />)}
        </ThemeProvider>
    )
}

export default Layout