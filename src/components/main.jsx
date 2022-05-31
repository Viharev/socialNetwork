import './../main.css';
import LinksSideBar from './linksidebar';
import Info from './info';
import InputManin from './inputManin';
import InputPosts from './inputPosts';

const main = () => {
    return (
        <div>
            <div>
                <div className='wrapBar'>
                    <div className='sideBar'>
                        <LinksSideBar />
                    </div>
                    <div className='content'>
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