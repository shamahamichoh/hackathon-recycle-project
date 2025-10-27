const GAME_ITEMS = [
            { id: 1, name: "Plastic Water Bottle", correctType: "recycle", points: 10, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-blue-500" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 2.05l-1-1h-6l-1 1H5v2h14V2.05zM15 16H9v-2h6v2zM15 12H9v-2h6v2z"/><path d="M5 5v16h14V5H5zm7 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>' },
            { id: 2, name: "Used Paper Napkin", correctType: "landfill", points: 5, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-gray-500" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM5 20V4h14l.001 16H5z"/><path d="M7 6h10v2H7zM7 10h10v2H7zM7 14h6v2H7z"/></svg>' },
            { id: 3, name: "Aluminum Soda Can", correctType: "recycle", points: 10, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-red-500" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M10 18h4v2h-4zM20 5c-.066-.37-.217-.714-.429-1.028C19.349 3.655 19.2 3.483 19 3.328l-2.029-2.029a.997.997 0 0 0-1.414 0L13.535 2H10.465L8.443 1.299a.996.996 0 0 0-1.414 0L5 3.328C4.8 3.483 4.651 3.655 4.429 3.972.217 4.286.066 4.63.001 5H2v1h-.001C2.066 6.37 2.217 6.714 2.429 7.028c.152.217.348.406.571.594H20c.223-.188.42-.377.571-.594.212-.314.363-.658.429-1.028H22V5h-2zM6 14v-5h12v5a3 3 0 0 1-6 0 3 3 0 0 1-6 0z"/></svg>' },
            { id: 4, name: "Dirty Food Wrapper", correctType: "landfill", points: 5, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-yellow-600" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-15h2v6h-2zm0 8h2v2h-2zm0 3h2v2h-2z"/></svg>' },
            { id: 5, name: "Glass Wine Bottle", correctType: "recycle", points: 10, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-green-700" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13 1.05v2.01L14.7 5H9.3l1.7-1.94V1.05h2zm-2.7 13.91l-1.3-1.5c.3-.3.61-.59.94-.88l1.3 1.5c-.32.29-.63.58-.94.88zM17 19H7c-1.1 0-2-.9-2-2v-4c0-.79.41-1.51 1.04-1.87L9.9 8H14.1l3.86 3.13c.63.36 1.04 1.08 1.04 1.87v4c0 1.1-.9 2-2 2zm-7.6-5.87l-1.3-1.5c.3-.3.61-.59.94-.88l1.3 1.5c-.32.29-.63.58-.94.88zM14.7 5h-5.4l-.44-.5L12 2.66l2.7 1.84-.44.5zM12 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>' },
            { id: 6, name: "Coffee Cup (Disposable)", correctType: "landfill", points: 5, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-amber-900" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 9V7h16l-.001 2H4z"/><path d="M4 11h16v6c0 1.103-.897 2-2 2H6c-1.103 0-2-.897-2-2v-6zm10 5h-4v-2h4v2z"/></svg>' },
            { id: 7, name: "Cardboard Box", correctType: "recycle", points: 10, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-orange-400" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 7H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-1 2v.421l-7 4.375-7-4.375V9h14zM4 17V9.589l7.001 4.376L18 10.43V17H4z"/></svg>' },
            { id: 8, name: "Plastic Straw", correctType: "landfill", points: 5, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-pink-500" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-15h2v6h-2zm0 8h2v2h-2zm0 3h2v2h-2z"/></svg>' },
            { id: 9, name: "Hard Plastic Toy", correctType: "recycle", points: 10, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-purple-600" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 10c0-3.313-2.687-6-6-6S6 6.687 6 10c0 4.398 2.667 7.233 6 11.233 3.333-3.999 6-6.835 6-11.233zm-6 9.488C9.444 16.485 7 13.568 7 10c0-2.757 2.243-5 5-5s5 2.243 5 5c0 3.568-2.444 6.485-5 9.488zM12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>' },
            { id: 10, name: "Banana Peel", correctType: "landfill", points: 5, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-yellow-300" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 7.25c-1.42 0-2.67.66-3.5 1.7L12 15.5l-5.5-6.55c-.83-1.04-2.08-1.7-3.5-1.7-2.68 0-4.88 2.2-4.88 4.88s2.2 4.88 4.88 4.88c1.42 0 2.67-.66 3.5-1.7L12 11.5l5.5 6.55c.83 1.04 2.08 1.7 3.5 1.7 2.68 0 4.88-2.2 4.88-4.88s-2.2-4.88-4.88-4.88z"/></svg>' },
        ];
        
        // --- GAME STATE VARIABLES ---
        let score = 0;
        let currentRound = 0; // Index of the current item in GAME_ITEMS
        const MAX_ROUNDS = GAME_ITEMS.length;

        // --- DOM Elements ---
        // Note: draggableItem must be retrieved inside loadNextItem as it's dynamically created
        const dropZones = document.querySelectorAll('.drop-zone');
        const itemContainer = document.getElementById('currentItemContainer');
        const feedbackDisplay = document.getElementById('feedback');
        const scoreDisplay = document.getElementById('scoreDisplay');
        const roundDisplay = document.getElementById('roundDisplay');
        
        // --- UTILITY FUNCTIONS ---
        
        function updateScore(points) {
            score += points;
            scoreDisplay.textContent = `Score: ${score}`;
        }

        function renderItem(item) {
            // Create the draggable element HTML
            const itemHtml = `
                <div id="draggableItem" 
                     draggable="true" 
                     data-item-type="${item.correctType}" 
                     class="item-card p-6 bg-white border-4 border-gray-300 rounded-2xl shadow-lg w-40 h-40 flex flex-col items-center justify-center">
                    ${item.icon}
                    <p class="mt-2 text-sm font-semibold text-gray-800">${item.name}</p>
                </div>
            `;
            itemContainer.innerHTML = itemHtml;

            // Re-attach dragstart listener since the element was replaced
            const draggableItem = document.getElementById('draggableItem');
            draggableItem.addEventListener('dragstart', handleDragStart);
        }

        function loadNextItem() {
            if (currentRound >= MAX_ROUNDS) {
                endGame();
                return;
            }

            const item = GAME_ITEMS[currentRound];
            roundDisplay.textContent = `Item ${currentRound + 1} of ${MAX_ROUNDS}`;
            feedbackDisplay.textContent = "Drag the item to the correct bin.";
            feedbackDisplay.classList.remove('text-green-600', 'text-red-600');
            feedbackDisplay.classList.add('text-gray-800');
            
            renderItem(item);
        }

        function endGame() {
            itemContainer.innerHTML = ''; // Clear the item area
            feedbackDisplay.textContent = `Game Over! Your final score is ${score} out of a possible ${MAX_ROUNDS * 10}.`;
            feedbackDisplay.classList.remove('text-red-600', 'text-gray-800');
            feedbackDisplay.classList.add('text-indigo-700', 'font-bold');
            roundDisplay.textContent = 'Demo Complete';
        }

        // --- DRAG AND DROP HANDLERS ---
        
        function handleDragStart(e) {
            e.dataTransfer.setData('text/plain', e.target.id);
            e.dataTransfer.effectAllowed = 'move';
        }

        dropZones.forEach(zone => {
            
            // 2. Drag Over: Required to allow dropping
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.currentTarget.classList.add('drag-over');
            });
            
            // 3. Drag Leave: Removes the visual feedback
            zone.addEventListener('dragleave', (e) => {
                e.currentTarget.classList.remove('drag-over');
            });

            // 4. Drop: Handles the logic
            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                e.currentTarget.classList.remove('drag-over');

                // Prevent dropping if the game is over or item container is empty
                if (currentRound >= MAX_ROUNDS) return; 

                const droppedBinType = e.currentTarget.getAttribute('data-type');
                
                checkAnswer(droppedBinType);
            });
        });

        // --- GAME LOGIC ---

        function checkAnswer(droppedBinType) {
            const currentItem = GAME_ITEMS[currentRound];
            const itemType = currentItem.correctType;
            itemContainer.innerHTML = ''; // Remove item after drop
            
            if (itemType === droppedBinType) {
                updateScore(currentItem.points);
                feedbackDisplay.textContent = `CORRECT! You scored ${currentItem.points} points.`;
                feedbackDisplay.classList.remove('text-red-600', 'text-gray-800');
                feedbackDisplay.classList.add('text-green-600');
            } else {
                // Penalize for incorrect sorting (optional: you can use updateScore(-5) to subtract points)
                feedbackDisplay.textContent = `WRONG! ${currentItem.name} goes into the ${itemType.toUpperCase()} bin.`;
                feedbackDisplay.classList.remove('text-green-600', 'text-gray-800');
                feedbackDisplay.classList.add('text-red-600');
            }

            // Move to the next round after a short delay for feedback
            currentRound++;
            setTimeout(loadNextItem, 1500); 
        }
        
        // Start the game!
        loadNextItem();