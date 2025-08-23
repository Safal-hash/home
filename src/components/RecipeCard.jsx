import React from "react";

const RecipeCard = () => {
  return (
    <div class="min-w-90 rounded-2xl overflow-hidden shadow-lg relative m-2">
      
        <img
          src="https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3OTU2OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTU5NjI5MTh8&ixlib=rb-4.1.0&q=85"
          alt="Cold Brew"
          class="w-full h-100 object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent"></div>
        <div class="absolute bottom-5 w-full p-4 text-primary opacity-90">
          <h2 class="text-2xl font-semibold text-primary">Coffee</h2>
            <div className="bg-gray-400 w-full h-0.25 opacity-100 mt-2 rounded-full">
            </div>
          <div class="flex items-center justify-between text-sm mt-2 font-light">
            <div>
              <p className="text-sm">
                Rating <br /> <span className="font-medium">4.7 / 5 (164 votes)</span>
              </p>
            </div>
            <div>
              <p>
                Method <br />
                <span class="font-medium">AeroPress</span>
              </p>
            </div>
            <div>
              <p>
                Author <br /> <span class="font-medium">Ramey</span>
              </p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default RecipeCard;
