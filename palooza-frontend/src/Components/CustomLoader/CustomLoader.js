import React from 'react';
import "./CustomLoader.css";
import { Typography } from '@mui/material';

function CustomLoader({label}) {
    return (
        <div className="CustomLoaderContainer">
            <svg className="CustomLoader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.041 506.2387">
                <path fill="#D1D3D4" d="M274.1353,144.6019c3.6118,6.2705,5.8447,13.333,5.8452,19.708v138.5635
                c5.5337,3.1953,10.5434,8.6777,14.1699,14.959l20.001-11.5469c3.6377,6.2891,5.8891,13.3828,5.8896,19.7832l-0.0405,124.1133
                c0.001,19.1289-13.4312,42.3935-29.9995,51.959c-7.7119,4.4531-14.7442,5.1533-20.0586,2.6992
                c-6.1035-2.8174-9.9414-9.793-9.9419-20.0196l0.0005-308.8964c-0.0005-6.3936-2.2466-13.4786-5.8779-19.7627L274.1353,144.6019z"/>
                <path fill="#5982E2" d="M279.9805,302.8734c11.0679,6.3896,20.039,21.9306,20.04,34.709l-0.0195,124.1445
            c0.001,6.3769-4.4771,14.1318-10,17.3223c-5.5235,3.1875-9.999,0.6015-10.0005-5.7745L279.9805,302.8734z"/>
                <path fill="#FFFFFF" d="M239.9609,141.2152c5.5303,3.1924,10.5367,8.6699,14.1622,14.9463c3.6313,6.2841,5.8774,13.3691,5.8779,19.7627
            l-0.0005,308.8964c0.0005,10.2266,3.8384,17.2022,9.9419,20.0196L20.001,360.6096C8.9546,354.2318-0.001,338.723,0.0005,325.9691
            L0,25.7459C-0.0015,12.9901,8.9541,7.8211,20.0005,14.1991L239.9609,141.2152z"/>
                <path fill="#E6E7E8" d="M25.4805,1.4793c3.8398-2.1421,8.8027-2.1284,14.52,1.1729l219.9604,126.9487
            c5.5469,3.2022,10.5665,8.7022,14.1949,15.001l-20.0327,11.5596c-3.6255-6.2764-8.6319-11.7539-14.1622-14.9463L20.0005,14.1991
            c-5.48-3.1641-10.4458-3.4864-14.0581-1.4502L25.4805,1.4793z"/>
                <path fill="#E6E7E8" d="M314.1514,306.3104c-3.6245-6.2676-8.6265-11.7363-14.1504-14.9258l-20-11.5469l-0.0205,23.0606
                c5.5337,3.1953,10.5434,8.6777,14.1699,14.959L314.1514,306.3104z"/>
                <polygon className="image" points="140,195 220,241 220,341 140,295" />
                <line className="line line1" x1="40" y1="95" x2="220" y2="199" />
                <line className="line line2" x1="40" y1="141" x2="120" y2="187" />
                <line className="line line3" x1="40" y1="187" x2="120" y2="234" />
                <line className="line line4" x1="40" y1="234" x2="120" y2="280" />
                <line className="line line5" x1="40" y1="280" x2="220" y2="384" />
                <line className="line line6" x1="40" y1="326" x2="220" y2="430" />
            </svg>
            <Typography variant="h6" className="CustomLoaderLabel">{label ? label : "Loading..."}</Typography>
        </div>
    )
}

export default CustomLoader