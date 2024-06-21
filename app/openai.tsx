import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface State {
  loading: boolean;
  content: { name: string; description: string }[] | null;
}

export default function OpenAIPage() {
  const [{ loading, content }, setState] = React.useReducer(
    (state: State, newState: Partial<State>) => ({ ...state, ...newState }),
    {
      loading: false,
      content: null,
    }
  );

  const [input, setInput] = React.useState("");

  const generateContent = async () => {
    setState({
      content: null,
      loading: true,
    });

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const content = await response.json();
      setState({
        content,
        loading: false,
      });
    } catch (error) {
      setState({
        content: null,
        loading: false,
      });
      throw error;
    }
  };

  return (
    <div className="container text-center">
      <div className="my-4">
        <h1 className="mb-4">Expo App Idea Generator</h1>

        <textarea
          value={input}
          className="form-control mb-4"
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          placeholder="e.g. AI app idea generator."
        />

        <button className="btn btn-primary mb-4" disabled={loading} onClick={generateContent}>
          {loading ? "Loading..." : "Generate"}
        </button>

        {content && (
          <>
            <h2 className="mb-4">Generated Ideas:</h2>
            {content.map(({ name, description }, index) => (
              <div key={index} className="mb-3">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
