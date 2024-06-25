import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';

export default function CallToAction() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.github.com/users/srijonp4';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to see more of my projects?</h2>
        <p className="text-gray-500 my-2">
          Check out my GitHub profile for more projects and contributions.
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href={profile ? profile.html_url : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile ? `View ${profile.login}'s GitHub Profile` : 'Loading...'}
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        {profile && <img src={profile.avatar_url} alt="Profile Photo" />}
      </div>
    </div>
  );
}
