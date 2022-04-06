import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import makeid from '../Shared/methods/makeid';
import './TagsField.css';

const TagsField = ({ setParentValue, tagsFromParent }) => {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState(tagsFromParent || []);
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const { t } = useTranslation();

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if ((key === ',' || key === '،') && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      const currentTags = [...tags, trimmedInput];
      setTags(currentTags);
      setParentValue(currentTags);
      setInput('');
    }

    if (key === 'Backspace' && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setParentValue(tags);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
    setParentValue(tags);
  };

  return (
    <div className="container-tags">
      {tags.map((tag, index) => (
        <div className="tag" key={makeid(10)}>
          {tag}
          <button type="button" onClick={() => deleteTag(index)}>x</button>
        </div>
      ))}
      <input
        value={input}
        placeholder={t('tagsEg')}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
      />
    </div>
  );
};

TagsField.propTypes = {
  setParentValue: PropTypes.func.isRequired,
  tagsFromParent: PropTypes.instanceOf(Array),
};

TagsField.defaultProps = {
  tagsFromParent: [],
};

export default TagsField;
