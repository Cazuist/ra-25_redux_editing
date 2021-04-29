import { useSelector, useDispatch } from 'react-redux';
import { 
  removeService,
  editService,
  clearServiceField,
} from '../actions/ActionCreators';

export default function ServiceList() {
  const item = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const onServiceRemove = (id) => {
    dispatch(removeService(id));
    if (id === item.selected) {
      dispatch(clearServiceField());
    }
  }

  const onServiceEdit = (id) => {
    const edited = item.services.find((s) => s.id === id);
    dispatch(editService(edited.name, "" + edited.price, id));
  }

  return (
    <div className='list_container'>
      <h3>Service List</h3>
        {item.services.length === 0 ? 'Нет сервисов' :
        item.services.map((service) => (
          <div className='servise__list__row' key={service.id}>
            <span className="row_name">{service.name}</span>
            <span className="row_price">{service.price}</span>
            <div className='btn_box'>
              <button onClick={() => onServiceEdit(service.id)}>
                <span className='material-icons'>edit</span>
              </button>
              <button onClick={() => onServiceRemove(service.id)}>
                <span className='material-icons'>delete</span>
              </button>
            </div>            
          </div>
        ))}
    </div>
  )
}