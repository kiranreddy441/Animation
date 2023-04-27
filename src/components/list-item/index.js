import './index.css'

const ListItem = (props)=>{
    const {details} = props
    const {name,id} = details

    

    

    return(
        <li className='item'>
            <p className='name'>{name}</p>
        </li>

    )

}

export default ListItem