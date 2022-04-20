import React from 'react'
import ContactRow from './ContactRow'
import "./Contacts.css"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts_options">
                <h3 >Contacts</h3>
                <div className="contact_option">
                    <VideoCallIcon />
                </div>
                <div className="contact_option">
                    <SearchIcon />
                </div>
                <div className="contact_option">
                    <MoreHorizIcon />
                </div>

            </div>

            <div className="contactRows">
                <ContactRow
                    src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/273126347_937900243580703_5371207865816665314_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=shjE-ISXYVEAX_Tg-YZ&_nc_oc=AQle6LfSqNI7yinDHTpOQFIr9ynm9SdELB3O_ro7iYiNNMeiDXgWPx4fQVntZAVeiZc&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-rcz6lsovSdAgTQfe7LVsTBdrP_B5P_Y9g2n1ZeuD-LA&oe=626438C0"
                    friendName="Tiến Đạt" />
                <ContactRow
                    src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/166066649_813536439581637_1295570070226382641_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1CWOFoxajQsAX_7oRjR&_nc_ht=scontent.fdad3-1.fna&oh=00_AT8hRt3o4jISN0hVbv-XtcBLAFROGgeerkHgL3kF1JnXhQ&oe=6285377F"
                    friendName="Hoàng Trọng Hiếu" />
                <ContactRow
                    src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/273163454_453267976445032_1384713621490154231_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Fx9NYcclXmYAX8tiqMa&tn=w9X_dNXuZhi6py50&_nc_ht=scontent.fdad3-1.fna&oh=00_AT9CJwybcDKs5h0ToAyJHyKONUvhkPqTTYtF-pG8r8Wv_g&oe=62650983"
                    friendName="Đặng Cường" />
            </div>

        </div>
    )
}

export default Contacts