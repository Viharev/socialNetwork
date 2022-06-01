import m from './../main.module.css'



const info = () => {
    return (
        <div>
            <div className={m.info}>
                <div className={m.photo}></div>
                <div className={m.list}>
                    <h2>viharev nikolay</h2>
                    <ul>
                        <li>Date of birth: 27.01.1989</li>
                        <li>City: Kirov</li>
                        <li>Ed. VyatskayaGSHa</li>
                        <li>web site: <a href="https://vk.com/vikharev.na">vk.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default info;