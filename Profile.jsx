import ProfilePicture from './ProfilePicture.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Button from './Button.jsx';

function Profile() {
  return (
    <div className="profile">
      <ProfilePicture />
      <AboutMe />
      <Skills />
      <Button />
    </div>
  );
}

export default Profile;
