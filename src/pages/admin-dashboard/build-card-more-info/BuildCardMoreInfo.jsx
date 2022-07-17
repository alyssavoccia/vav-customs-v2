import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { toast } from 'react-toastify';
import CustomBuildsContext from '../../../context/custom-builds/CustomBuildsContext';
import './buildCardMoreInfo.scss';

function BuildCardMoreInfo() {
  const { dispatch, builds } = useContext(CustomBuildsContext);
  const [loading, setLoading] = useState(true);
  const [build, setBuild] = useState(null);
  const [formData, setFormData] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (builds) {
      const currentName = params.userName.split('-').join(' ');
      const currentBuild = builds.filter(item => item.name === currentName);
      setBuild(currentBuild[0]);

      if (build) {
        setFormData({
          status: build.status,
          notes: build.notes
        });

        setLoading(false);
      }
    }
  }, [builds, params.userName, build]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const buildIndex = builds.findIndex(obj => obj.name === build.name);
    builds[buildIndex].status = formData.status;
    builds[buildIndex].notes = formData.notes;

    try {
      const customBuildsRef = collection(db, 'customBuilds');
    
      const querySnap = await getDocs(customBuildsRef);

      console.log(querySnap)

      querySnap.forEach((document) => {
        const docRef = doc(db, 'customBuilds', document.id);

        if (build.name === document.data().name) {
          updateDoc(docRef, formData);
          dispatch({ type: 'ADD_CUSTOM_BUILDS', payload: builds });
          toast.success('Successfully updated build progress!');
        }
      });

    } catch (error) {
      toast.error('Could not update build progress.');
    }
  };

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  if (loading) {
    return <p>Loading user info</p>
  }

  return (
    <div className='more-info'>
      <div className='dashboard__header'>
        <h1>{build.name}</h1>
      </div>
      <div className='more-info__button-section'>
        <Link className='btn btn-secondary' to='/admin/custom-builds'>Back to All Builds</Link>
      </div>
      <div className="dashboard__section">
        <div className="more-info__section">
          <div className='more-info__section-images'>
            {build.imgUrls.map((img, i) => (
              <img className='more-info__section-images-img' key={i} src={img} alt='Custom Build Example' />
            ))}
          </div>
          <div className="more-info__section-description">
            <h2>Custom Build Description</h2>
            <p className='more-info__description'>{build.message}</p>
            <h2>Contact Information</h2>
            <p>{build.email}</p>
          </div>
        </div>
      </div>
      <div className="dashboard__section">
        <h2>Build Progress</h2>
        <form>
          <div className="more-info__section-build-status">
            <label>Build Status</label>
            <div className="more-info__section-build-status__form-buttons">
              <button 
                type='button'
                id='status'
                value='Not Viewed'
                onClick={onChange}
                className={formData.status === 'Not Viewed' ? 'form-button form-button-active' : 'form-button'}
              >
                Not Viewed
              </button>
              <button 
                type='button'
                id='status'
                value='Viewed'
                onClick={onChange}
                className={formData.status === 'Viewed' ? 'form-button form-button-active' : 'form-button'}
              >
                Viewed
              </button>
              <button 
                type='button'
                id='status'
                value='In Progress'
                onClick={onChange}
                className={formData.status === 'In Progress' ? 'form-button form-button-active' : 'form-button'}
              >
                In Progress
              </button>
              <button 
                type='button'
                id='status'
                value='Completed'
                onClick={onChange}
                className={formData.status === 'Completed' ? 'form-button form-button-active' : 'form-button'}
              >
                Completed
              </button>
            </div>
          </div>
          <div className="more-info__section-notes">
            <label>Build Notes</label>
            <textarea id='notes' onChange={onChange} value={formData.notes}></textarea>
          </div>
          <button className='btn more-info__section-btn' type='submit' onClick={onSubmit}>Update</button>
        </form>
      </div>
    </div>
  )
}

export default BuildCardMoreInfo;