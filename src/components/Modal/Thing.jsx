import Modal from '@components/Modal';
import useThing from '@hooks/useThing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_SERVER_URL, prefixs } from '@utils/constant'
import css from '@styles/Thing.module.css'

export default () => {
  const {fetchThing} = useThing();
  const {thingId} = useParams();
  const [thing, setThing] = useState({});

  useEffect(() => {
    fetchThing(thingId).then((res)=>setThing(res));
  },[])
  
  return (
    <Modal>
      <div className={css.base}>
        {
          thing.thingId && (
            <>
              <img className={css.thingImage} src={`${API_SERVER_URL}/thing/${thing.thingId}/image`} alt='' />
              <div className={css.info}>
                <div className={css.titleBox}>
                  <h2>{thing.title}</h2>
                  <p>{`${thing.quantity} ${prefixs[thing.prefix + 10]?.prefix}m`}</p>
                </div>
                <p className={css.explanation}>{thing.explanation}</p>
              </div>
            </>
          )
        }
      </div>
    </Modal>
  )
}