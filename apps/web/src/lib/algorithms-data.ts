// Comprehensive list of algorithms and data structures for OpenDSA
// This is an ambitious roadmap - contributions welcome!

export interface AlgorithmTopic {
  name: string;
  implemented: boolean;
  description?: string;
}

export interface CategoryItem {
  topics: AlgorithmTopic[];
}

export interface Category {
  title: string;
  items: Record<string, CategoryItem>;
}

export interface AlgorithmCategories {
  dataStructures: Category;
  algorithms: Category;
}

export const categories: AlgorithmCategories = {
  dataStructures: {
    title: "Data Structures",
    items: {
      Arrays: {
        topics: [
          { name: "Basic Array Operations", implemented: false },
          { name: "Dynamic Arrays", implemented: false },
          { name: "Multi-dimensional Arrays", implemented: false },
        ],
      },
      "Linked Lists": {
        topics: [
          { name: "Singly Linked List", implemented: false },
          { name: "Doubly Linked List", implemented: false },
          { name: "Circular Linked List", implemented: false },
        ],
      },
      Stacks: {
        topics: [
          { name: "Basic Stack Operations", implemented: false },
          { name: "Applications (Balancing Parentheses)", implemented: false },
        ],
      },
      Queues: {
        topics: [
          { name: "Basic Queue", implemented: false },
          { name: "Circular Queue", implemented: false },
          { name: "Priority Queue", implemented: false },
          { name: "Deque (Double-Ended Queue)", implemented: false },
        ],
      },
      Trees: {
        topics: [
          { name: "Binary Tree", implemented: false },
          { name: "Binary Search Tree (BST)", implemented: false },
          { name: "AVL Tree (Self-Balancing BST)", implemented: false },
          { name: "Red-Black Tree", implemented: false },
          { name: "Segment Tree", implemented: false },
          { name: "Trie", implemented: false },
          { name: "B-Tree and B+ Tree", implemented: false },
        ],
      },
      Heaps: {
        topics: [
          { name: "Min Heap", implemented: false },
          { name: "Max Heap", implemented: false },
          { name: "Fibonacci Heap", implemented: false },
        ],
      },
      Graphs: {
        topics: [
          { name: "Directed/Undirected Graphs", implemented: false },
          { name: "Weighted/Unweighted Graphs", implemented: false },
          { name: "Adjacency Matrix", implemented: false },
          { name: "Adjacency List", implemented: false },
          { name: "Edge List", implemented: false },
        ],
      },
      Hashing: {
        topics: [
          { name: "Hash Tables", implemented: false },
          { name: "Hash Maps", implemented: false },
          { name: "Open Addressing", implemented: false },
          { name: "Separate Chaining", implemented: false },
        ],
      },
    },
  },
  algorithms: {
    title: "Algorithms",
    items: {
      "Sorting (Easy)": {
        topics: [
          { name: "Bubble Sort", implemented: false },
          { name: "Selection Sort", implemented: false },
          { name: "Insertion Sort", implemented: false },
        ],
      },
      "Sorting (Intermediate)": {
        topics: [
          { name: "Merge Sort", implemented: false },
          { name: "Quick Sort", implemented: false },
        ],
      },
      "Sorting (Advanced)": {
        topics: [
          { name: "Heap Sort", implemented: false },
          { name: "Counting Sort", implemented: false },
          { name: "Radix Sort", implemented: false },
          { name: "Bucket Sort", implemented: false },
        ],
      },
      Searching: {
        topics: [
          { name: "Linear Search", implemented: false },
          { name: "Binary Search", implemented: false },
          { name: "Jump Search", implemented: false },
          { name: "Exponential Search", implemented: false },
        ],
      },
      "Graph Algorithms": {
        topics: [
          { name: "Breadth-First Search (BFS)", implemented: false },
          { name: "Depth-First Search (DFS)", implemented: false },
          { name: "Dijkstra's Algorithm", implemented: false },
          { name: "Floyd-Warshall", implemented: false },
          { name: "Bellman-Ford", implemented: false },
          { name: "Prim's MST", implemented: false },
          { name: "Kruskal's MST", implemented: false },
          { name: "A* Search", implemented: false },
        ],
      },
      "Dynamic Programming": {
        topics: [
          { name: "Fibonacci", implemented: false },
          { name: "Coin Change (Minimum Coins)", implemented: false },
          { name: "Longest Common Subsequence (LCS)", implemented: false },
          { name: "Knapsack Problem", implemented: false },
          { name: "Matrix Chain Multiplication", implemented: false },
        ],
      },
      Backtracking: {
        topics: [
          { name: "Rat in a Maze", implemented: false },
          { name: "N-Queens Problem", implemented: false },
          { name: "Knight's Tour", implemented: false },
          { name: "Sudoku Solver", implemented: false },
        ],
      },
      "Greedy Algorithms": {
        topics: [
          { name: "Activity Selection", implemented: false },
          { name: "Fractional Knapsack", implemented: false },
          { name: "Huffman Coding", implemented: false },
          { name: "Job Sequencing", implemented: false },
        ],
      },
      "Miscellaneous Algorithms": {
        topics: [
          { name: "Sieve of Eratosthenes (Prime Numbers)", implemented: false },
          { name: "Euclidean Algorithm (GCD)", implemented: false },
          { name: "KMP Pattern Matching", implemented: false },
          { name: "Rabin-Karp Algorithm", implemented: false },
          { name: "Bit Manipulation", implemented: false },
          { name: "Randomized Algorithms (QuickSelect)", implemented: false },
        ],
      },
    },
  },
};

// Helper functions
export function getTotalCount(): { total: number; implemented: number } {
  let total = 0;
  let implemented = 0;

  (Object.values(categories) as Category[]).forEach((category) => {
    Object.values(category.items).forEach((item: CategoryItem) => {
      item.topics.forEach((topic) => {
        total++;
        if (topic.implemented) implemented++;
      });
    });
  });

  return { total, implemented };
}

export function getCategoryCount(category: Category): { total: number; implemented: number } {
  let total = 0;
  let implemented = 0;

  Object.values(category.items).forEach((item) => {
    item.topics.forEach((topic) => {
      total++;
      if (topic.implemented) implemented++;
    });
  });

  return { total, implemented };
}
