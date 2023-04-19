import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../../img/feature_1.png';
import featureimage1 from '../../img/feature_2.png';
import featureimage2 from '../../img/feature_3.png';

const Feature = () => {
  return (
    <div id='features'>

        <div className="a-container">

            <FeatureBox image={featureimage}  title = 'Development Course' />
            <FeatureBox image={featureimage1}  title = 'Money Saving Services' />
            <FeatureBox image={featureimage2}  title = 'Usability Interface' />
        
        
        </div>


    </div>
  )
}

export default Feature