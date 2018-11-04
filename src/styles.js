import styled from "styled-components";

export const Title = styled.h1`
	font-size: 54px;
	text-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
	padding: 30px;
`;

export const TextContainer = styled.div`
	width: 100vw;
	height: 25vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-item: center;

	.word {
		font-size: 35px;
		margin-bottom: 10px;
		font-weight: bold;
	}

	.text {
		font-size: 18px;
	}
`;

export const BtnContainer = styled.div`
	width: 80vw;
	height: 25vh;
  margin: 0 auto
	display: flex;
  align-items: center;
  justify-content: center;

  .btn{
    width: 150px;
    height: 50px;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 2px;
    border: 2px solid currentColor;
    position: relative;
    cursor: pointer;
    transition: .5s ease-out;
    overflow:hidden;
    padding: 10px;
    box-sizing: border-box;
    line-height: 40px;
    border-radius: 3px;
    background-color: #0093e9;
    margin-right: 50px;

    & span{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width:100%;
      height: 100%;
      transition: .5s ease-out;
    }

    & span:first-child{
      transform: scale(1);
    }

    & span:last-child{
      transform: scale(5);
      opacity: 0;
      color: #0093e9;
      background-color: #fff;
    }

    &:hover span:first-child{
      transform: scale(0);
    }

    &:hover span:last-child{
      transform: scale(1);
      opacity: 1;
    }
  } 
`;

export const Input = styled.input`
	display: block;
	border: none;
	border-bottom: 2px solid #fff;
	outline: none;
	width: 500px;
	margin: 0 auto;
	padding: 20px 10px;
	background: none;
	color: #fff;
	font-size: 18px;

	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: #ccc;
	}
	::-moz-placeholder {
		/* Firefox 19+ */
		color: #ccc;
	}
	:-ms-input-placeholder {
		/* IE 10+ */
		color: #ccc;
	}
	:-moz-placeholder {
		/* Firefox 18- */
		color: #ccc;
	}
`;

export const Info = styled.span`
	font-size: 18px;
	display: inline-block;
	margin-right: 10px;
`;
