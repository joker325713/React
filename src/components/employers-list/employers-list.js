import EmployersListItem from '../employers-list-item/employers-list-item'
import './employrs-list.css'

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list app-group">
            {elements}
        </ul>
    )
}

export default EmployersList;