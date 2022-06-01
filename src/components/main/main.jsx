import './main.module.css';
import LinksSideBar from './../linksidebar';
import Info from './../info';
import Post from '../posts/posts';



const m = {
    'wrapBar' : 'main_wrapBar__3lhJ8',
    'sideBar' : 'main_sideBar__PFiZs',
    'content' : 'main_content__vimMA',
    'links' : 'main_links__6UtHo',
    'bgTop' : 'main_bgTop__cWW0s',
    'mainInfo' : 'main_info__v3O\+t',



}

const main = () => {
    return (
        <div>
            <div>
                <div className={m.wrapBar}>
                    <div className={m.sideBar}>
                        <LinksSideBar />
                    </div>
                    <div className={m.content}>
                        <div className={m.bgTop}></div>
                        <Info />
                        <Post message='hi, how are u?' like="12" dis="15"/>
                        <Post message="it's my first post" like="123" dis="1"/>
                        <Post message="it's third props" like="1" dis="1"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default main;