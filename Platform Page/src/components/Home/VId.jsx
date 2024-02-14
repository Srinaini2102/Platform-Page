import Video from './Video.mp4';
export default function VId() {
  return (
    <>
      <div className="video">
        <div className="vid1">
          <div className="heading-community">
            How to use the platform?
          </div>
          <div className="sub-txt">
            Watch this short video to learn how to navigate through the platform
          </div>
        </div>
        <div className="vid2">
          <video className="h-50 w-auto rounded-lg" controls>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
