export default function ImageGalleryItem({ id, webformatURL, tags }) {
  return (
    <li className="ImageGalleryItem">
      <img key={id} src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
}
