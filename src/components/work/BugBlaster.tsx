import {
  faBug,
  faPlay,
  faRotateRight,
  faSkullCrossbones,
  faTrophy,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {Button} from '@/components/ui/button';
import {CANVAS_HEIGHT, getEscapedLabel, getScoreLabel} from '@/data/bugBlaster';

import {useBugBlasterGame} from './useBugBlasterGame';

export const BugBlaster = () => {
  const {
    canvasRef,
    containerRef,
    escaped,
    factLogRef,
    facts,
    gameState,
    handlePointerMove,
    highScore,
    score,
    startGame,
    stopGame,
    timeLeft,
  } = useBugBlasterGame();
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border bg-card"
      ref={containerRef}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon className="text-brand" icon={faBug} />
          <span className="text-sm font-semibold">Bug Blaster</span>
        </div>
        {gameState === 'playing' && (
          <div className="flex items-center gap-4 text-sm">
            <span className="tabular-nums text-muted-foreground">{timeLeft}s</span>
            <span className="font-semibold tabular-nums text-success">{score} caught</span>
            {escaped > 0 && (
              <span className="tabular-nums text-destructive">{escaped} escaped</span>
            )}
          </div>
        )}
        {gameState === 'playing' && (
          <Button
            aria-label="Stop game"
            className="text-muted-foreground hover:text-foreground"
            onClick={stopGame}
            size="icon-sm"
            variant="ghost"
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        )}
      </div>

      {/* Canvas */}
      <div className="relative">
        <canvas
          aria-hidden="true"
          className="w-full cursor-none"
          onPointerMove={handlePointerMove}
          ref={canvasRef}
          style={{height: CANVAS_HEIGHT}}
        />

        {/* Idle overlay */}
        {gameState === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-card/80 backdrop-blur-sm">
            <p className="max-w-sm text-center text-sm text-muted-foreground">
              Catch falling bugs with your cursor (or arrow keys).
              <br />
              Every bug caught reveals a fun fact.
            </p>
            <Button onClick={startGame} variant="gradient">
              <FontAwesomeIcon icon={faPlay} />
              Start Game
            </Button>
            {highScore > 0 && (
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <FontAwesomeIcon className="text-warning" icon={faTrophy} />
                High score: {highScore}
              </p>
            )}
          </div>
        )}

        {/* Game over overlay */}
        {gameState === 'over' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-card/80 backdrop-blur-sm">
            <p className="text-lg font-semibold">
              {score} caught, {escaped} escaped
            </p>
            <p className="text-sm italic text-muted-foreground">{getScoreLabel(score)}</p>
            {escaped > 0 && (
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <FontAwesomeIcon className="text-destructive" icon={faSkullCrossbones} />
                {getEscapedLabel(escaped)}
              </p>
            )}
            {score >= highScore && score > 0 && (
              <p className="flex items-center gap-1.5 text-sm font-medium text-warning">
                <FontAwesomeIcon icon={faTrophy} />
                New high score!
              </p>
            )}
            <Button className="mt-2" onClick={startGame} variant="gradient">
              <FontAwesomeIcon icon={faRotateRight} />
              Play Again
            </Button>
          </div>
        )}
      </div>

      {/* Fact log */}
      <div
        aria-live="polite"
        className="max-h-28 overflow-y-auto border-t border-border px-4 py-2 text-sm text-muted-foreground"
        ref={factLogRef}
      >
        {facts.length > 0 ? (
          <ul className="space-y-1.5">
            {facts.map((fact, i) => (
              <li
                className={
                  i === 0 ? 'animate-in fade-in slide-in-from-top-1 duration-300' : 'opacity-60'
                }
                key={`${fact}-${facts.length - i}`}
              >
                <span className="mr-1.5 text-xs text-brand">#{facts.length - i}</span>
                {fact}
              </li>
            ))}
          </ul>
        ) : gameState === 'playing' ? (
          <p className="py-1 text-center opacity-50">Catch a bug to reveal a fun fact...</p>
        ) : null}
      </div>

      {/* Screen reader announcement */}
      <div aria-live="assertive" className="sr-only" role="status">
        {gameState === 'playing' &&
          `Score: ${score} caught, ${escaped} escaped. Time remaining: ${timeLeft} seconds.`}
        {gameState === 'over' &&
          `Game over. You caught ${score} bugs. ${escaped} escaped. ${getScoreLabel(score)}`}
      </div>
    </div>
  );
};
