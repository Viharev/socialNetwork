import './../main.module.css';
import LinksSideBar from './linksidebar';
import Info from './info';
import InputManin from './inputManin';
import InputPosts from './inputPosts';

const m = {
    'wrapBar' : 'main_wrapBar__EiXZZ',
    'sideBar' : 'main_sideBar__y34D1',
    'content' : 'main_content__Mel8I',
    'links' : 'main_links__6UtHo',
    'bgTop' : ''


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
                        <div className='bgTop'></div>
                        <Info />
                        <InputManin />
                        <InputPosts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default main;