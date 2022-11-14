import styles from '../styles/Home.module.css'

const navBarList =[{hyperlink:"#top",text:"Joshua Du Plooy"},
{hyperlink:"#WhoAmI",text:"Who Am I?"},
{hyperlink:"#WhySovTech",text:"Why SovTech?"},
{hyperlink:"#Skills",text:"Skills List"},
];
function Item(props){
    return(      
            <li><a href={props.hyperlink}>{props.text}</a></li>
    )
}
export default function Header(){
    return(
        <header>
                
                 <ul class={styles.header}>
                    {navBarList.map((toplevel) => <Item  key={toplevel.id} hyperlink={toplevel.hyperlink} text={toplevel.text}/>)}
                    
                </ul>
            
        </header>
    )
}

