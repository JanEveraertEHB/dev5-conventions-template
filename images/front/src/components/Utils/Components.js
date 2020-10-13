import React from 'react';
import { Link } from 'react-router-dom';

import { Circle } from 'rc-progress';
import fontawesome from '@fortawesome/fontawesome';
import {
  faUserCircle,
  faCheck,
  faQuestionCircle,
  faSearch,
  faChevronDown
} from '@fortawesome/fontawesome-free-solid';
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faTwitter
} from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { css, placeholder as placehldr } from 'glamor';
import {
  primary,
  primaryL,
  primaryD,
  danger,
  warning,
  succes,
  facebookColor,
  youtubeColor,
  instaColor,
  twitterColor,
  white,
  text,
  gray,
  grayL,
  grayD,
  footerBg,
  padding,
  transition,
  sidebarWidth,
  boxShadow
} from './../variables';

// Add icons to the library
fontawesome.library.add(
  faUserCircle,
  faCheck,
  faQuestionCircle,
  faSearch,
  faChevronDown
);

// Stylings
const searchInput = css({
  position: 'absolute',
  top: 45,
  right: 20,
  transition: transition,
  '> div': {
    position: 'relative',
    '> input': {
      padding: padding,
      width: 230,
      fontFamily: 'Raleway',
      border: 'none !important',
      outline: 'none',
      ':focus ~ svg': {
        color: text
      }
    },
    '> svg': {
      position: 'absolute',
      left: -12,
      top: 12
    }
  }
});
const doneIcon = css({
  display: 'inline-block',
  textAlign: 'center',
  height: 20,
  width: 18,
  backgroundColor: succes,
  padding: '9px 10px',
  borderRadius: '50%'
});
const inProgressIcon = css({
  display: 'inline-block',
  textAlign: 'center',
  height: 20,
  width: 18,
  backgroundColor: warning,
  padding: '9px 10px',
  borderRadius: '50%',
  fontWeight: 600,
  '&::after': {
    content: '···'
  }
});
const notDoneIcon = css({
  display: 'inline-block',
  textAlign: 'center',
  height: 20,
  width: 18,
  backgroundColor: danger,
  padding: '9px 10px',
  borderRadius: '50%',
  fontWeight: 600,
  '&::after': {
    content: '−'
  }
});
const socialMedia = css({
  '@media(min-width: 320px)': {
    display: 'none'
  },
  '@media(min-width: 400px)': {
    display: 'inline-block'
  },
  marginRight: 20,
  '> a': {
    '> svg': {
      margin: '0 5px',
      fontSize: 14,
      backgroundColor: 'red',
      borderRadius: '50%',
      width: '14px !important',
      height: 14,
      padding: 5,
      marginBottom: -5,
      color: white,
      '&.fa-facebook-f': {
        backgroundColor: facebookColor
      },
      '&.fa-youtube': {
        backgroundColor: youtubeColor
      },
      '&.fa-instagram': {
        backgroundColor: instaColor
      },
      '&.fa-twitter': {
        backgroundColor: twitterColor
      },
      '&:hover': {
        cursor: 'pointer',
        opacity: '.9'
      }
    }
  }
});

export const container = css({
  position: 'relative',
  width: 'calc(100% - 10px)',
  maxWidth: 1140,
  margin: '0 auto'
});
export const firstSection = css({
  position: 'relative',
  width: '100vw',
  height: 'calc(100vh - 103px - 50px)',
  '@media(min-width: 320px)': {
    marginTop: 20
  },
  '@media(min-width: 960px)': {
    marginTop: 50
  },
  '> div': {
    '> h1': {
      textAlign: 'center',
      fontWeight: 900,
      '@media(min-width: 320px)': {
        fontSize: 28
      },
      '@media(min-width: 960px)': {
        fontSize: '4rem'
      }
    },
    '> div': {
      '> h3': {
        textAlign: 'center',
        fontWeight: 700,
        marginTop: '1em',
        marginBottom: 0,
        color: primary,
        '@media(min-width: 320px)': {
          fontSize: 18
        },
        '@media(min-width: 960px)': {
          fontSize: 24
        }
      },
      '> p': {
        textAlign: 'center',
        color: grayD,
        marginBottom: 0,
        '@media(min-width: 320px)': {
          fontSize: 14
        },
        '@media(min-width: 768px)': {
          fontSize: 16
        },
        '@media(min-width: 960px)': {
          fontSize: 18
        }
      },
      '> img.eyecatcher': {
        width: '100%',
        marginTop: 20
      }
    }
  },
  '> .wave-container': {
    width: '100%',
    height: 100,
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999,
    '> .wave': {
      display: 'block',
      position: 'relative',
      height: 40,
      backgroundColor: white
    },
    '> .wave::before': {
      content: "''",
      display: 'block',
      position: 'absolute',
      borderRadius: '100%',
      width: '100%',
      height: 300,
      backgroundColor: primary,
      right: '-25%',
      top: 20
    },
    '> .wave::after': {
      content: "''",
      display: 'block',
      position: 'absolute',
      borderRadius: '100%',
      width: '100%',
      height: 300,
      backgroundColor: white,
      left: '-25%',
      top: -240
    },
    '> a.scroll-to-bottom': {
      position: 'absolute',
      textAlign: 'center',
      borderRadius: '50%',
      border: '2px solid white',
      padding: 10,
      height: 20,
      width: 20,
      right: '20%',
      color: white,
      '&:hover': {
        transition: transition,
        color: primaryL,
        borderColor: primaryL
      }
    }
  }
});
export const section = css({
  position: 'relative',
  width: '100vw',
  height: 'calc(100vh - 160px)',
  marginTop: -69,
  padding: '110px 0 50px',
  '&.odd': {
    backgroundColor: primary,
    color: white,
    '> div': {
      '> h2': {
        textAlign: 'center',
        fontWeight: 900,
        '@media(min-width: 320px)': {
          fontSize: 24,
          marginBottom: 30
        },
        '@media(min-width: 960px)': {
          fontSize: 36,
          marginBottom: 100
        }
      },
      '> div': {
        padding: padding,
        textAlign: 'center',
        '> img': {
          '@media(min-width: 320px)': {
            height: 50
          },
          '@media(min-width: 960px)': {
            height: 200
          }
        },
        '> div': {
          '@media(min-width: 320px)': {
            marginBottom: 0
          },
          '@media(min-width: 960px)': {
            marginBottom: 50
          },
          '> h3': {
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: '-.05rem',
            marginBottom: 10
          }
        }
      }
    },
    '> .wave-container': {
      '> .wave': {
        backgroundColor: primary,
        height: 20,
        '&::before': {
          backgroundColor: white
        },
        '&::after': {
          backgroundColor: primary
        }
      },
      '> a.scroll-to-bottom': {
        border: `2px solid ${primary}`,
        color: primary,
        '&:hover': {
          color: primaryD,
          borderColor: primaryD
        }
      }
    }
  },
  '&.even': {
    backgroundColor: white,
    '> div': {
      '> h2': {
        textAlign: 'center',
        fontWeight: 900,
        color: primary,
        '@media(min-width: 320px)': {
          fontSize: 24,
          marginBottom: 30
        },
        '@media(min-width: 960px)': {
          fontSize: 36,
          marginBottom: 100
        }
      }
    },
    '> .wave-container': {
      '> .wave': {
        backgroundColor: white,
        height: 40,
        '&::before': {
          backgroundColor: primary
        },
        '&::after': {
          backgroundColor: white
        }
      },
      '> a.scroll-to-bottom': {
        border: `2px solid ${white}`,
        color: white,
        '&:hover': {
          color: primaryL,
          borderColor: primaryL
        }
      }
    }
  },
  '> .wave-container': {
    width: '100%',
    height: 100,
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999,
    '> .wave': {
      display: 'block',
      position: 'relative',
      '&::before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        borderRadius: '100%',
        width: '100%',
        height: 300,
        right: '-25%',
        top: 20
      },
      '&::after': {
        content: "''",
        display: 'block',
        position: 'absolute',
        borderRadius: '100%',
        width: '100%',
        height: 300,
        left: '-25%',
        top: -240
      }
    },
    '> a.scroll-to-bottom': {
      position: 'absolute',
      textAlign: 'center',
      borderRadius: '50%',
      padding: 10,
      height: 20,
      width: 20,
      right: '20%',
      '&:hover': {
        transition: transition
      }
    }
  }
});
export const h3 = css({
  fontSize: '24px !important',
  fontWeight: 'bold !important'
});
export const center = css({ textAlign: 'center' });
export const menuApp = css({
  width: '100%',
  height: 103,
  backgroundColor: white,
  margin: 0,
  fontSize: 14,
  boxShadow: '0 2px 5px rgba(0, 0, 0, .16)'
});
export const userContainer = css({
  lineHeight: '103px',
  float: 'right',
  width: '550px',
  textAlign: 'right',
  boxSizing: 'border-box',
  marginRight: 20,
  '> span > small.user': {
    color: `${text}!important`,
    fontWeight: 'bold',
    paddingRight: '20px'
  }
});
export const ctaLink = css({
  lineHeight: '50px',
  backgroundColor: primary,
  color: `${white} !important`,
  padding: padding,
  borderRadius: 4,
  cursor: 'pointer',
  transition: transition,
  ':hover': {
    backgroundColor: `${primaryD} !important`
  }
});
export const login = css({
  display: 'inline-block',
  marginTop: 30,
  lineHeight: '24px !important'
});
export const smallCTA = css({
  marginRight: '20px',
  cursor: 'pointer'
});
export const table = css({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${primary}`,
  borderRadius: 16,
  boxShadow: '0 2px 5px rgba(0,0,0,.16)',
  '> .thead': {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '12px 12px 0 0',
    fontWeight: 'bold',
    backgroundColor: primary,
    color: white
  },
  '> .tbody': {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0 0 2px 2px',
    '> div > .cell': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    '> div:last-of-type': {
      borderRadius: '0 0 15px 15px'
    }
  },
  '> .thead > .cell, > .tbody .cell': {
    margin: '0 !important'
  },
  '@media(min-width: 320px)': {
    '> .thead': {
      fontSize: 14,
      height: 38,
      '> .cell': {
        lineHeight: '28px'
      }
    },
    '> .tbody': {
      fontSize: 12
    },
    '> .tbody .cell': {
      lineHeight: '20px'
    },
    '> .thead > .cell, > .tbody .cell': {
      padding: '5px 10px'
    }
  },
  '@media(min-width: 960px)': {
    '> .thead': {
      fontSize: 16,
      height: 50
    },
    '> .tbody': {
      fontSize: 16
    },
    '> .tbody .cell': {
      lineHeight: '32px'
    },
    '> .thead > .cell, > .tbody .cell': {
      padding: padding
    }
  }
});
export const itemRow = css({
  display: 'flex',
  flexDirection: 'row',
  '&:hover': {
    backgroundColor: grayL,
    transition: transition,
    '> .cell:first-of-type': {
      borderLeft: `2px solid ${primary}`,
      transition: transition
    }
  }
});
export const partnersSection = css({
  height: 350,
  '> div > div > p': {
    '> a': {
      color: white,
      transition: transition,
      '&:hover': {
        color: primaryL
      }
    }
  }
});
export const cardsPartner = css({
  display: 'flex',
  flexDirection: 'row',
  margin: '0 auto',
  '@media(min-width: 320px)': {
    width: 240,
    '> .card': {
      padding: 10
    }
  },
  '@media(min-width: 768px)': {
    width: 500
  },
  '@media(min-width: 960px)': {
    '> .card': {
      padding: 20
    }
  },
  '> .card': {
    backgroundColor: white,
    transition: transition,
    marginLeft: '4%',
    '&:hover': {
      transform: 'scale(1.1)'
    },
    '&:first-of-type': {
      marginLeft: 0
    }
  }
});
export const rewards = css({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',
  borderRadius: 16,
  boxShadow: boxShadow,
  marginBottom: 50,
  '> div': {
    padding: '50px 30px 20px'
  },
  '> .sidebar': {
    width: sidebarWidth,
    borderRadius: '16px 0 0 16px',
    backgroundColor: primary,
    color: white,
    '> span.skills': {
      textTransform: 'uppercase',
      fontWeight: 800,
      color: primaryL
    },
    '> ul': {
      listStyle: 'none',
      padding: '20px 0',
      marginLeft: -26,
      width: 'calc(100% + 57px)',
      '> li': {
        lineHeight: '50px',
        transition: transition,
        '> span': {
          display: 'block',
          paddingLeft: 26,
          color: white,
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: white,
            color: primary
          }
        }
      }
    }
  },
  '> .content': {
    width: `calc(100% - ${sidebarWidth}px)`,
    border: `1px solid ${primary}`,
    borderRadius: '0 16px 16px 0',
    '> em': {
      color: gray
    },
    '> div': {
      marginBottom: 20,
      '> .skill-title': {
        color: primary,
        fontWeight: 800,
        fontSize: 18
      },
      '> .skill-total-points': {
        marginLeft: 20,
        padding: '5px 10px',
        backgroundColor: text,
        color: white,
        borderRadius: 16,
        fontSize: 14
      },
      '@media(min-width: 320px)': {
        '> .skill-level': {
          width: '100%'
        }
      },
      '@media(min-width: 750px)': {
        '> .skill-level': {
          width: '48%',
          marginLeft: '0% !important'
        }
      },
      '@media(min-width: 960px)': {
        '> .skill-level': {
          width: '30.6% !important',
          '&:nth-child(4n)': {
            marginLeft: '0% !important'
          }
        }
      },
      '> .skill-level': {
        padding: '20px 20px',
        transition: transition,
        '> div': {
          '> span.done-icon, > span.in-progress-icon, > span.not-done-icon': {
            position: 'relative',
            marginRight: 10,
            color: white
          },
          '> span.question-mark': {
            paddingLeft: 5,
            color: text,
            ':hover': {
              color: grayD,
              cursor: 'help'
            }
          },
          '> small.skill-points': {
            color: gray,
            fontWeight: 600
          },
          '@media(min-width: 320px)': {
            '> small.skill-points': {
              paddingLeft: 0,
              fontSize: 13
            }
          },
          '@media(min-width: 960px)': {
            '> small.skill-points': {
              paddingLeft: 50,
              fontSize: 12
            }
          },
          '> div > span.percentage': {
            position: 'absolute',
            top: 'calc(38% - 4px)',
            left: 0,
            width: '100%',
            textAlign: 'center',
            color: primary,
            fontSize: 18,
            fontWeight: 800
          }
        },
        ':hover': {
          boxShadow: boxShadow
        }
      }
    }
  }
});
export const progressBar = css({
  position: 'relative',
  width: '70%',
  minWidth: 100,
  margin: '0 auto'
});
export const footerTop = css({
  width: 'calc(100% - 40px)',
  padding: '30px 20px',
  minHeight: 100,
  backgroundColor: footerBg,
  color: gray,
  margin: 0,
  fontSize: 14,
  '> div > .flex': {
    display: 'flex',
    flexDirection: 'row',
    '> div': {
      margin: '0 10px'
    }
  }
});
export const footerBottom = css({
  backgroundColor: white,
  '> div > div': {
    '> p.em': {
      fontSize: 12,
      textAlign: 'center',
      paddingTop: 20,
      fontStyle: 'italic'
    },
    '> img.euh': {
      display: 'block',
      paddingBottom: 20,
      margin: '0 auto'
    }
  }
});
export const fullHeight = css({
  '@media(min-width: 320px)': {
    height: '100% !important'
  },
  '@media(min-width: 768px)': {
    height: 'calc(100vh - 160px) !important'
  }
});

// Elements
export const UserDetails = ({ name }) => {
  return (
    <small className="user">
      <FontAwesomeIcon icon={faUserCircle} size="lg" />
      {name}
    </small>
  );
};
export const SocialMedia = () => {
  return (
    <small {...socialMedia}>
      <Link to="https://www.facebook.com/projecttcbl/" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} size="lg" />
      </Link>
      <Link
        to="https://www.youtube.com/channel/UCZcpRQi7vjIxuq50a-8KOxA/videos"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </Link>
      <Link to="https://www.instagram.com/tcblproject/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </Link>
      <Link to="https://twitter.com/tcblproject" target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </Link>
    </small>
  );
};
export const Search = () => {
  return (
    <div {...searchInput}>
      <div>
        <input
          {...placehldr({
            fontFamily: 'Raleway',
            fontStyle: 'italic',
            color: gray,
            fontWeight: 300
          })}
          type="text"
          placeholder="search through your skill levels"
        />
        <FontAwesomeIcon icon={faSearch} color={gray} />
      </div>
    </div>
  );
};
export const QuestionMarkIcon = ({ title }) => {
  return (
    <span className="question-mark" title={title}>
      <FontAwesomeIcon icon={faQuestionCircle} />
    </span>
  );
};
export const DoneIcon = () => {
  return (
    <span className="done-icon" {...doneIcon}>
      <FontAwesomeIcon icon={faCheck} color={white} />
    </span>
  );
};
export const InProgressIcon = () => {
  return <span className="in-progress-icon" {...inProgressIcon} />;
};
export const NotDoneIcon = () => {
  return <span className="not-done-icon" {...notDoneIcon} />;
};
export const ProgressBar = ({ percentage }) => {
  return (
    <Circle
      percent={percentage}
      strokeWidth={6}
      trailWidth={2}
      strokeColor={primary}
    >
      {percentage}
    </Circle>
  );
};
export const ScrollToBottomIcon = ({ link, className }) => {
  return (
    <a href={link} className={className}>
      <FontAwesomeIcon icon={faChevronDown} />
    </a>
  );
};
