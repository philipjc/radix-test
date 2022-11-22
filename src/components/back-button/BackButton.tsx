import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <FontAwesomeIcon
      icon={faHandPointLeft}
      onClick={() => navigate('/')}
      style={{ fontSize: '1.6em', cursor: 'pointer' }}
    />
  );
}
