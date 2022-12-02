import * as React from "react";
type Props = { children: React.ReactNode };

type challengesDataType = {}[];
type brandStatsDataType = {}[];
type tricksDataType = {}[];
type likesDataType = {}[]
type adminContextType = {
  challenges: challengesDataType;
  setChallenges: (challenges: challengesDataType) => void;
  brandStats: brandStatsDataType;
  setBrandStats: React.Dispatch<React.SetStateAction<brandStatsDataType>>;
  tricks: tricksDataType;
  setTricks: React.Dispatch<React.SetStateAction<tricksDataType>>;
  likes: tricksDataType;
  setLikes: React.Dispatch<React.SetStateAction<tricksDataType>>;

}
export const adminContext = React.createContext<adminContextType>({
  challenges: [{}],
  setChallenges: () => { },
  brandStats: [{}],
  setBrandStats: () => { },
  tricks: [{}],
  setTricks: () => { },
  likes: [{}],
  setLikes: () => { }

});

export const AdminProvider: React.FC<Props> = ({ children }) => {
  const [challenges, setChallenges] = React.useState<challengesDataType>([]);
  const [brandStats, setBrandStats] = React.useState<brandStatsDataType>([]);
  const [tricks, setTricks] = React.useState<tricksDataType>([]);
  const [likes, setLikes] = React.useState<tricksDataType>([]);

  return (
    <adminContext.Provider
      value={{ challenges, setChallenges, brandStats, setBrandStats, tricks, setTricks, likes, setLikes }}
    >
      {children}
    </adminContext.Provider>
  );
};